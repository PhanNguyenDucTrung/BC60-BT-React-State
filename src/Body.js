import React, { Component } from 'react';
import data from './data.js';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImgUrl: '/glassesImage/v1.png',
            activeButtonId: 1,
        };
    }

    handleImgClick = id => {
        this.setState({ currentImgUrl: `/glassesImage/v${id}.png`, activeButtonId: id });
    };

    render() {
        const { currentImgUrl, activeButtonId } = this.state;
        const activeGlasses = data.find(glasses => glasses.id === activeButtonId);

        return (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '480px', position: 'relative', height: '585px' }}>
                    <img src='/glassesImage/model.jpg' alt='' style={{ position: 'absolute' }} />
                    <img
                        src={currentImgUrl}
                        alt=''
                        style={{
                            position: 'absolute',
                            width: '244px',
                            top: '152px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            opacity: '0.8',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            bottom: '0',
                            padding: '10px',
                            backgroundColor: 'rgba(252, 189, 144, 0.5)',
                            opacity: '0.9',
                        }}>
                        <p style={{ fontWeight: 'bold' }}>{activeGlasses.name}</p>
                        <p>{activeGlasses.desc}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', maxWidth: '600px', flexWrap: 'wrap', gap: '10px', alignSelf: 'start' }}>
                    <h3 style={{ width: '100%' }}>Choose your glasses</h3>
                    {data.map(glasses => (
                        <button
                            key={glasses.id}
                            style={{
                                width: 'calc(25% - 10px)',
                                border: activeButtonId === glasses.id ? '2px solid #6fbedb' : '1px solid',
                                background: activeButtonId === glasses.id ? 'lightblue' : 'transparent',
                                padding: '24px 5px',
                            }}
                            onClick={() => this.handleImgClick(glasses.id)}>
                            <img
                                src={`/glassesImage/v${glasses.id}.png`}
                                alt='okssss'
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Body;
