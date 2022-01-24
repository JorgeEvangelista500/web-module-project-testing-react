import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { getByLabelText, queryAllByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
import Episode from '../Episode';

const testShow = {
    name: 'string',
    summary: 'string',
    seasons: [
        {
            id:0,
            name: 'string',
            episodes: []
        },
        {
            id:1,
            name: 'string2',
            episodes: []
        },
    ]
}
       

test('renders without errors', ()=>{
    render(<Show show={testShow} selectedSeason={'none'}/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />)
    const isLoading = screen.getByTestId('loading-container')
    expect(isLoading).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason={'none'}/>)

    const numberSeasons = screen.queryAllByTestId("season-option")
    expect(numberSeasons).toHaveLength(2);
})
    

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn()
    render(<Show show={testShow} selectedSeason={'none'} handleSelect={handleSelect}/>)

    const seasonSelector = screen.getByLabelText(/Select A Season/i);
    userEvent.selectOptions(seasonSelector, ['0']);

    expect(handleSelect).toBeCalled();


});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={testShow} selectedSeason={'none'}/>);
    let episodes = screen.queryByTestId('episodes-container')
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show show={testShow} selectedSeason={0}/>)
    episodes = screen.queryByTestId('episodes-container')
    expect(episodes).toBeInTheDocument();
});
    