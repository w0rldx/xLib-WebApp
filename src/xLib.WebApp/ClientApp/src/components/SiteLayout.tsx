import React from 'react';
import '../scss/SiteLayout.scss';

type Props = {
    children?: JSX.Element | JSX.Element[];
    topBar?: React.ReactNode;
    sidePanel?: React.ReactNode;
};

function SiteLayout({ children, topBar, sidePanel }: Props) {
    return (
        <div>
            <div className="container">
                <div className="sideBar">{sidePanel}</div>
                <div className="topBar">{topBar}</div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default SiteLayout;
