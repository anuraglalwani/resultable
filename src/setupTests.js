// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


class Worker {
    constructor(stringUrl) {
       this.url = stringUrl;
       this.onmessage = jest.fn();
    }
 
    postMessage(msg) {
       this.onmessage(msg);
    }
 }
 
 window.Worker = Worker;
 
 global.URL.createObjectURL = jest.fn();
 
 