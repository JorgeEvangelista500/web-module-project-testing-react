import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


const testEpisode={
        id: 0,
        image: null,
        name: 'Jorge',
        season: 0,
        number: 0,
        summary: 'summary 1',
        runtime: 45,
}

test("renders without error", () => {
    render (<Episode episode = {testEpisode}/>);
});

test("renders the summary test passed as prop", ()=>{
    render (<Episode episode={testEpisode} />);

    const episodeSummary = screen.getByText(/summary 1/i)
    expect(episodeSummary).toBeInTheDocument();
});

test("renders default image when image is not defined", ()=>{
    render (<Episode episode={testEpisode} />);

        const imgAlt = screen.getByAltText("https://i.ibb.co/2FsfXqM/stranger-things.png");
        expect(imgAlt).toBeInTheDocument();
 
});
