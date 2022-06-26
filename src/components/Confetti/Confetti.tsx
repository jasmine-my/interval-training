import React, { useCallback, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

interface IConfettiProps {
    /** 버튼 타이틀 */
    title?: string;
}

export default function Confetti({ title }: IConfettiProps) {
    const refAnimationInstance = useRef<any>(null);

    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio: any, opts: any) => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current({
                ...opts,
                origin: { y: 1 },
                particleCount: Math.floor(200 * particleRatio),
            });
        }
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        makeShot(0.2, {
            spread: 60,
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);
    return (
        <>
            <button onClick={fire}>
                {title ? (
                    <span>{title}</span>
                ) : (
                    <div>
                        <span>🎉</span>
                        <span>Click</span>
                    </div>
                )}
            </button>
            <ReactCanvasConfetti
                refConfetti={getInstance}
                style={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
            />
        </>
    );
}
