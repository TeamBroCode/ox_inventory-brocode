import illeg from './img/LLEG.png';
import irleg from './img/RLEG.png';
import iupperbody from './img/upperbody.png';
import ilowerbody from './img/lowerbody.png';
import irarm from './img/rarm.png';
import ilarm from './img/larm.png';
import ilpalm from './img/lpalm.png';
import ineck from './img/neck.png';
import ihead from './img/head.png';
import irpalm from './img/rpalm.png';
import irfoot from './img/rfoot.png';
import ilfoot from './img/lfoot.png';
import Arrowright from '../SVG/Arrowright';
import Arrowleft from '../SVG/Arrowleft';
import { flip, FloatingPortal, offset, shift, useFloating, useTransitionStyles } from '@floating-ui/react';
import React from 'react';
import { getItemUrl } from '../helpers';
import { isEnvBrowser } from './misc';
import { debugData } from './debugData';
debugData([
    {
        action: 'DamageCall',
        data: {
            HEAD: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            SPINE: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LARM: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RFOOT: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RHAND: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LFOOT: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            NECK: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RLEG: {
                severity: true,
                percent: 10,
                bullets: 6,
                broken: false,
                bleeding: true,
            },
            LLEG: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LOWER_BODY: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            LHAND: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            UPPER_BODY: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
            RARM: {
                severity: false,
                percent: 0,
                bullets: 0,
                broken: false,
                bleeding: false,
            },
        }
    }
]);


export default function Body(
    { detaileddata }:
        { detaileddata: any }
) {
    const [hoverData, setHoverData] = React.useState<boolean>(false);
    const [bodypart, setBodypart] = React.useState<string>("");
    const [bodydamagecal, setBodydamagecal] = React.useState<any>(detaileddata);

    const { refs, context, floatingStyles } = useFloating({
        middleware: [flip(), shift(), offset({ mainAxis: 15, crossAxis: -20 })],
        open: hoverData,
        placement: 'right-start',
    });
    const { isMounted, styles } = useTransitionStyles(context, {
        duration: 200,
    });
    const handleMouseMove = ({ clientX, clientY }: MouseEvent | React.MouseEvent<unknown, MouseEvent>) => {
        refs.setPositionReference({
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    x: clientX,
                    y: clientY,
                    left: clientX,
                    top: clientY,
                    right: clientX,
                    bottom: clientY,
                };
            },
        });
    };
    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="group">

            <div className="overlap-group" >
                {isMounted && (
                    <FloatingPortal>
                        <div
                            ref={refs.setFloating}
                            style={{ ...floatingStyles, ...styles, color: 'white' }}
                        ><div style={{ fontSize: '0.9vw', fontWeight: 600 }}>{bodypart}</div><div style={{
                            width: '14vw',
                            height: '8vw',
                            backgroundColor: 'rgba(225,225,225,0.4)',
                            borderRadius: '0.3vw',
                            backdropFilter: 'blur(0.3vw)',
                        }}>
                                <div style={{ width: '0%', height: '10%', margin: '0.5vw', position: 'absolute' }}>
                                    Information
                                    <div style={{ width: '13vw', height: '1.2vw', backgroundColor: 'rgba(171, 171, 171,0.5)', backdropFilter: 'blur(0.4vw)', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                        <div style={{ width: '50%', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            Bullets
                                        </div>
                                        <div style={{ width: '50%', background: 'rgba(166, 43, 43, 0.6)', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            {bodydamagecal[bodypart]?.bullets || 0}
                                        </div>
                                    </div>
                                    <div style={{ width: '13vw', height: '1.2vw', backgroundColor: 'rgba(171, 171, 171,0.5)', backdropFilter: 'blur(0.4vw)', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '0.3vw' }}>
                                        <div style={{ width: '50%', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            Broken
                                        </div>
                                        <div style={{ width: '50%', background: 'rgba(166, 43, 43, 0.6)', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            {bodydamagecal[bodypart]?.broken ? 'Yes' : 'No'}
                                        </div>
                                    </div>
                                    <div style={{ width: '13vw', height: '1.2vw', backgroundColor: 'rgba(171, 171, 171,0.5)', backdropFilter: 'blur(0.4vw)', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '0.25vw' }}>
                                        <div style={{ width: '50%', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            Severity
                                        </div>
                                        <div style={{ width: '50%', background: 'rgba(166, 43, 43, 0.6)', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            {bodydamagecal[bodypart]?.severity ? 'High' : 'None'}
                                        </div>
                                    </div>
                                    <div style={{ width: '13vw', height: '1.2vw', backgroundColor: 'rgba(171, 171, 171,0.5)', backdropFilter: 'blur(0.4vw)', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '0.25vw' }}>
                                        <div style={{ width: '50%', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            Bleeding
                                        </div>
                                        <div style={{ width: '50%', background: 'rgba(166, 43, 43, 0.6)', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            {bodydamagecal[bodypart]?.bleeding ? 'Yes' : 'No'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FloatingPortal>
                )}
                <div onMouseEnter={() => { setHoverData(true); setBodypart('UPPER_BODY') }} onMouseLeave={() => { setHoverData(false) }} className='upbody' style={{ width: '6.5vw', height: '5vw', position: 'absolute', marginLeft: '10vw', marginTop: '8vw', zIndex: 1, borderRadius: '1vw' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('HEAD') }} onMouseLeave={() => { setHoverData(false) }} className='headd' style={{ width: '4vw', height: '4.5vw', position: 'absolute', marginLeft: '11vw', marginTop: '1vw', zIndex: 1, borderRadius: '1vw', rotate: '2deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('NECK') }} onMouseLeave={() => { setHoverData(false) }} className='neckk' style={{ width: '6.5vw', height: '2.5vw', position: 'absolute', marginLeft: '9.8vw', marginTop: '5.5vw', zIndex: 1, borderRadius: '1vw', rotate: '0deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LOWER_BODY') }} onMouseLeave={() => { setHoverData(false) }} className='lowerbodyyy' style={{ width: '6.5vw', height: '5vw', position: 'absolute', marginLeft: '9.8vw', marginTop: '13vw', zIndex: 1, borderRadius: '1vw', rotate: '2deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RARM') }} onMouseLeave={() => { setHoverData(false) }} className='rarmmm' style={{ width: '2vw', height: '12vw', position: 'absolute', marginLeft: '17.2vw', marginTop: '7vw', zIndex: 1, borderRadius: '1vw', rotate: '-15deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LARM') }} onMouseLeave={() => { setHoverData(false) }} className='larmmm' style={{ width: '2vw', height: '12vw', position: 'absolute', marginLeft: '7vw', marginTop: '7.5vw', zIndex: 1, borderRadius: '1vw', rotate: '20deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LLEG') }} onMouseLeave={() => { setHoverData(false) }} className='lleggg' style={{ width: '4vw', height: '14vw', position: 'absolute', marginLeft: '8vw', marginTop: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '0deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RLEG') }} onMouseLeave={() => { setHoverData(false) }} className='rlegg' style={{ width: '3.5vw', height: '16vw', position: 'absolute', marginLeft: '12.7vw', marginTop: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '-5deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LHAND') }} onMouseLeave={() => { setHoverData(false) }} className='lpalmmm' style={{ width: '2vw', height: '3vw', position: 'absolute', marginLeft: '3.8vw', marginTop: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '20deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('LFOOT') }} onMouseLeave={() => { setHoverData(false) }} className='lfoottt' style={{ width: '2vw', height: '5vw', position: 'absolute', marginLeft: '10.8vw', marginTop: '31.8vw', zIndex: 1, borderRadius: '1vw', rotate: '30deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RHAND') }} onMouseLeave={() => { setHoverData(false) }} className='rpalmmm' style={{ width: '2vw', height: '4vw', position: 'absolute', marginLeft: '18.8vw', marginTop: '18.5vw', zIndex: 1, borderRadius: '1vw', rotate: '-10deg' }} />
                <div onMouseEnter={() => { setHoverData(true); setBodypart('RFOOT') }} onMouseLeave={() => { setHoverData(false) }} className='rfoottt' style={{ width: '3vw', height: '3vw', position: 'absolute', marginLeft: '13vw', marginTop: '34.5vw', zIndex: 1, borderRadius: '1vw', rotate: '10deg' }} />
                <Arrowright styles={{
                    width: '10vw',
                    height: '1.8vw',
                    position: 'absolute',
                    marginLeft: '11vw',
                    marginTop: '2.5vw',
                }} durablitystyles={{ width: '5vw', marginLeft: '15.5vw', marginTop: '1vw', position: 'absolute' }} label={'Head'} percent={100 - bodydamagecal["HEAD"]?.percent} />
                <Arrowright styles={{
                    width: '10vw',
                    height: '1.8vw',
                    position: 'absolute',
                    marginLeft: '15vw',
                    marginTop: '9vw',
                }} durablitystyles={{ width: '5vw', marginLeft: '19.5vw', marginTop: '7.5vw', position: 'absolute' }} label={'Right Arm'} percent={100 - bodydamagecal["RARM"]?.percent} />
                <Arrowright styles={{
                    width: '10vw',
                    height: '1.8vw',
                    position: 'absolute',
                    marginLeft: '12vw',
                    marginTop: '26vw',
                }} durablitystyles={{ width: '5vw', marginLeft: '16.5vw', marginTop: '24.5vw', position: 'absolute' }} label={'Right Leg'} percent={100 - bodydamagecal["RLEG"]?.percent} />
                <Arrowleft styles={{
                    width: '10vw',
                    height: '1.8vw',
                    position: 'absolute',
                    marginLeft: '1.2vw',
                    marginTop: '26vw',
                }} durablitystyles={{ width: '5vw', marginLeft: '1.7vw', marginTop: '24.5vw', position: 'absolute' }} label={'Left Leg'} percent={100 - bodydamagecal["LLEG"]?.percent} />
                <Arrowleft styles={{
                    width: '10vw',
                    height: '1.8vw',
                    position: 'absolute',
                    marginLeft: '1.2vw',
                    marginTop: '9vw',
                }} durablitystyles={{ width: '5vw', marginLeft: '1.8vw', marginTop: '7.5vw', position: 'absolute' }} label={'Left Arm'} percent={100 - bodydamagecal["LARM"]?.percent} />
                <img className="UPPERBODY" style={{ filter: `sepia(${bodydamagecal["UPPER_BODY"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Upperbody" src={isEnvBrowser() ? iupperbody : getItemUrl('upperbody')} />
                <img className="img" style={{ filter: `sepia(${bodydamagecal["LOWER_BODY"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Lowerbody" src={isEnvBrowser() ? ilowerbody : getItemUrl('lowerbody')} />
                <img className="LLEG" style={{ filter: `sepia(${bodydamagecal["LLEG"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Lleg" src={isEnvBrowser() ? illeg : getItemUrl('LLEG')} />
                <img className="RLEG" style={{ filter: `sepia(${bodydamagecal["RLEG"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Rleg" src={isEnvBrowser() ? irleg : getItemUrl('RLEG')} />
                <img className="img" style={{ filter: `sepia(${bodydamagecal["RARM"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Rhand" src={isEnvBrowser() ? irarm : getItemUrl('rarm')} />
                <img className="LARM" style={{ filter: `sepia(${bodydamagecal["LARM"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Larm" src={isEnvBrowser() ? ilarm : getItemUrl('larm')} />
                <img className="img" style={{ filter: `sepia(${bodydamagecal["LHAND"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Lparm" src={isEnvBrowser() ? ilpalm : getItemUrl('lpalm')} />
                <img className="neck" style={{ filter: `sepia(${bodydamagecal["NECK"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Neck" src={isEnvBrowser() ? ineck : getItemUrl('neck')} />
                <img className="head" style={{ filter: `sepia(${bodydamagecal["HEAD"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Head" src={isEnvBrowser() ? ihead : getItemUrl('head')} />
                <img className="RARM" style={{ filter: `sepia(${bodydamagecal["RHAND"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="Rarm" src={isEnvBrowser() ? irpalm : getItemUrl('rpalm')} />
                <img className="img-2" style={{ filter: `sepia(${bodydamagecal["RFOOT"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt="RFoot" src={isEnvBrowser() ? irfoot : getItemUrl('rfoot')} />
                <img className="img-3" style={{ filter: `sepia(${bodydamagecal["LFOOT"]?.percent}%) saturate(300%) brightness(100%) hue-rotate(299deg)` }} alt='LFoot' src={isEnvBrowser() ? ilfoot : getItemUrl('lfoot')} />
            </div>
        </div>
    );
}