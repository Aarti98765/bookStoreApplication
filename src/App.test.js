import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUpForm from './SignInSignUpForm/SignUpForm';
import Admin from './SignInSignUpForm/Admin';
configure({ adapter: new Adapter() });

describe("Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< SignUpForm />);
  });

  test('renders the text of signup component', () => {
    const referAdminView = shallow(<Admin />);  
    expect(referAdminView.find("h3").text()).toContain("Hello Admin!!!  Your login successfully done...")
 /*const { getByText } = render(<App />);
  const linkElement = getByText("This is bookstore app");
  expect(linkElement).toBeInTheDocument(); */


  /*test("render the titel of counter", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("h1").text()).toContain("Bookstore");
  })*/
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(12);
  });
  
})

