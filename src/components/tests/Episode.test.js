import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
    render (<Episode episode={{
        id: 0,
        image: 'string',
        name: 'string',
        season: 0,
        number: 0,
        summary: 'string',
        runtime: 'string',
      }} />);
});

test("renders the summary test passed as prop", ()=>{
    render (<Episode episode={
        {id: 1,name: 'jorge', season:1, number:1, summary:'summary 1', runtime:45 }} />);

    const episodeSummary = screen.getByText(/summary 1/i)
    expect(episodeSummary).toBeInTheDocument();
});

test("renders default image when image is not defined", ()=>{
    render (<Episode episode={
        {id: 1, name: 'jorge2', season:1, number:1, summary:'summary 2', runtime:45, image:null }} />);

        const imgAlt = screen.getByAltText("https://i.ibb.co/2FsfXqM/stranger-things.png");
        console.log(imgAlt)
        expect(imgAlt).toBeInTheDocument();
        

});
