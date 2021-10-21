import styles from './index.css';
import React from 'react';

// import img from '/src/assets/img.png'

class Index extends React.Component {

    componentDidMount() {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');

        let image = new Image();
        image.src = require('/src/assets/img.png');
        console.log('image',image);
        image.onload = function() {
            canvas.style.width = image.width;
            canvas.style.height = image.height;
            console.log(canvas);
            ctx.drawImage(image, 0, 0);
        };

        console.log("ctx",ctx);

        let imageData = ctx.getImageData(0, 0, image.width, image.height).data;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, image.width, image.height);

        const gap = 6;

        for (let h = 0; h < image.height; h += gap) {
            for (let w = 0; h < image.width; w += gap) {
                let position = (image.width * h + w) * 4;
                let r = imageData[position], g = imageData[position + 1], b = imageData[position + 2];

                if ((r + g + b) == 0) {
                    ctx.fillStyle="#000";
                    ctx.fillRect(w, h ,4, 4);
                }
            }
        }
    }

    render() {
        return (
            <div className={styles.normal} >
                <canvas id={'myCanvas'} width={300} height={200} />
            </div>
        );
    }
}

export default Index;
