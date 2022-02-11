


import React, { useContext, useState } from 'react'
import SecHeader from './SecHeader/SecHeader';
import SecMainOne from './SecMainOne/SecMainOne';
import SecMainTwo from './SecMainTwo/SecMainTwo';
import SecFooter from './SecFooter/SecFooter';

import { LeftContainer, LeftItemStyle } from './Left-SectionStyle'




const LeftSection = (props) => {



    return (
        <>
            <LeftContainer>
                <SecHeader />
                <SecMainOne />
                <SecMainTwo />
                <SecFooter />
            </LeftContainer>

        </>
    )
}

export default LeftSection