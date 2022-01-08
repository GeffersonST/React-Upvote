import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import Header from "../components/Header";

describe("<Header />", () => {
  it("should return an h1 with 'hello' string", () => {
    const component = TestUtils.renderIntoDocument(<Header />);

    const h1 = TestUtils.findRenderedDOMComponentWithTag(component, "h1");

    expect(h1.textContent).toEqual("Header");
  });
});
