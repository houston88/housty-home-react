import React, { useRef, useEffect } from 'react';

const MatrixAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = canvas.parentElement.clientWidth || 300;
        let height = canvas.parentElement.clientHeight || 200;
        canvas.width = width;
        canvas.height = height;

        const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%".split("");

        const fontSize = 14;
        let columns = Math.floor(width / fontSize);
        let drops = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        let interval = setInterval(draw, 33);

        const handleResize = () => {
            if (!canvas.parentElement) return;
            width = canvas.parentElement.clientWidth;
            height = canvas.parentElement.clientHeight;
            canvas.width = width;
            canvas.height = height;
            columns = Math.floor(width / fontSize);
            drops = Array(columns).fill(1);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', backgroundColor: '#000' }} />;
};

export default MatrixAnimation;
