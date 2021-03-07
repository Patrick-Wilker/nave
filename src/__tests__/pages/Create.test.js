import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Create from '../../pages/CreateNaver/index';
import Header from '../../components/Header/index'

describe("<Create />", ()=>{
    it('should render an header', () => {
        const wrapper = shallow(<Create />);

        expect(wrapper.find(Header)).to.have.lengthOf(1);
    });
})

