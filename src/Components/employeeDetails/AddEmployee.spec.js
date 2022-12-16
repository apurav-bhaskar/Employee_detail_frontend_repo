import React from "react";
// import {render} from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
 import AddEmployee from "./AddEmployee";
 //const AddEmployee = require("./AddEmployee");
import render from "@testing-library/react"
import { ExpansionPanelActions } from "@material-ui/core";
describe("Basic Rendering add Employee Details Form",()=>{
   
    it("Should check if submit button is present",()=>{
        // const {getByRole} = render(
        //     AddEmployee
        // );
        const {getByTestId} = render(
            <AddEmployee/>
        )
        //expect(getByRole("button",{name : "Submit"})).toBeDefined();
        expect(getByTestId("button")).toHaveTextContent("Submit");
    })
   
});