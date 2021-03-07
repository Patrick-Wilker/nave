import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from '../../pages/Home/index';
import Header from '../../components/Header/index'

describe("<Home />", ()=>{
    it('should render an header', () => {
        const wrapper = shallow(<Home />);

        expect(wrapper.find(Header)).to.have.lengthOf(1);
    });
})

