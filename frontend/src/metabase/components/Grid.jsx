/* eslint-disable react/prop-types */
import React from "react";
import { GridItemRoot, GridRoot, GridNewQuestionRoot } from "./Grid.styled";

export const Grid = props => <GridRoot {...props} />;

//start - ellucian - new custom GridNewQuestion component for formatting
export const GridNewQuestion = props => <GridNewQuestionRoot {...props} />;
//end - ellucian - new custom GridNewQuestion component for formatting

export const GridItem = props => <GridItemRoot {...props} />;
