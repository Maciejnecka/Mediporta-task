import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import TagList from '../components/TagList';
import tagsReducer from '../components/redux/tags/tagsSlice';

export default {
  title: 'Components/TagList',
  component: TagList,
  decorators: [
    (Story) => (
      <Provider store={createMockStore({ tags: initialState })}>
        <MemoryRouter initialEntries={['/page/1']}>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
};

const createMockStore = (initialState) =>
  createStore(combineReducers({ tags: tagsReducer }), initialState);

const initialState = {
  tags: {
    data: {
      items: [
        { name: 'React', count: 10 },
        { name: 'Redux', count: 8 },
        { name: 'Storybook', count: 5 },
      ],
    },
    isLoading: false,
    error: null,
  },
};

export const Default = () => <TagList />;

export const LoadingState = () => (
  <Provider
    store={createMockStore({
      tags: { ...initialState.tags, isLoading: true },
    })}
  >
    <MemoryRouter>
      <TagList />
    </MemoryRouter>
  </Provider>
);

export const ErrorState = () => (
  <Provider
    store={createMockStore({
      tags: { ...initialState.tags, error: 'Error fetching tags' },
    })}
  >
    <MemoryRouter>
      <TagList />
    </MemoryRouter>
  </Provider>
);
