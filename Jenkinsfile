library identifier: 'gitCheckout@master', retriever: modernSCM(
  [$class: 'GitSCMSource',
   remote: 'https://git.ellucian.com/scm/ba20/baplatform-pipeline-shared-lib.git',
   credentialsId: 'git_read_only']
)

library identifier: 'dockerBuilder@PROD', retriever: modernSCM(
  [$class: 'GitSCMSource',
   remote: "https://git.ellucian.com/scm/devops/jenkins-pipeline-docker.git",
   credentialsId: 'git_read_only']
)

node('ec2-worker-u18-single-large') {
    properties([[$class: 'CopyArtifactPermissionProperty', projectNames: '.*']])
    checkout scm
    
    stage ( 'Setup Build' ) {
        env.commit_id = sh(script: 'git rev-parse HEAD', , returnStdout: true).trim()
        echo "commit_id:" + commit_id
        env.shortCommit = commit_id.substring(0,5).trim()
        env.repoName = 'eii-irt-source' 
        env.repository_branch = sh(
                        returnStdout: true,
                        script: "echo ${env.BRANCH_NAME}").trim()
        echo 'repository_branch is' + env.repository_branch
        currentBuild.displayName = "#${env.BUILD_NUMBER}-${env.repoName}-${env.repository_branch}-${env.shortCommit}"
    }
    stage ( 'Build' ) {
        sh '''
            make jarBuild
        ''' 
    }
    stage ( 'Upload jar to Artifactory' ) {
        env.version= sh(
            returnStdout: true,
            script: "cat package.json | jq -r .version").trim()
        env.fullVersion = version + "." + shortCommit
        sh 'echo ${fullVersion} > metabase-jar.info' 
        sh 'cat metabase-jar.info'
        rtUpload (
            serverId: 'ArtifactoryProd',
            spec: '''{
                "files": [
                    {
                        "pattern": "metabase-jar.info",
                        "target": "eii-local/metabase-jar/$fullVersion/"
                    }
                ]
            }''',
            buildName: 'metabase.jar',
            buildNumber: version
        )
        rtUpload (
            serverId: 'ArtifactoryProd',
            spec: '''{
                "files": [
                    {
                        "pattern": "metabase.jar",
                        "target": "eii-local/metabase-jar/$fullVersion/"
                    }
                ]
            }''',
            buildName: 'metabase.jar',
            buildNumber: version
        )
        rtUpload (
            serverId: 'ArtifactoryProd',
            spec: '''{
                "files": [
                    {
                        "pattern": "metabase.jar",
                        "target": "eii-local/metabase-jar/latest/"
                    }
                ]
            }''',
            buildName: 'metabase.jar',
            buildNumber: version
        )
        rtUpload (
            serverId: 'ArtifactoryProd',
            spec: '''{
                "files": [
                    {
                        "pattern": "metabase-jar.info",
                        "target": "eii-local/metabase-jar/latest/"
                    }
                ]
            }''',
            buildName: 'metabase.jar',
            buildNumber: version
        )
    }
    //dockerBuilder([publish: true, publishBranches:['master','develop'], runUnitTests: false, runIntegrationTests: false, slackChannel: 'team-analytics-cicd'])
     
}

