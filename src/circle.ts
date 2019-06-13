export interface ICircle {
    x: number;
    y: number;
    radius: number;
}

/**
 * 画一个彩色的圆
 * @param context: 绘图上下文对象
 * @param colors: 颜色数组，用来填充圆
 * @param circle: 圆的圆心半径等信息
 */
export function colorsCircle(context: CanvasRenderingContext2D, colors: string[], circle: ICircle) {
    colors.forEach((color, index) => {
        context.beginPath();

        // 绘制一个圆弧，弧度为 1 / colors.length
        context.moveTo(circle.x, circle.y);
        context.arc(circle.x, circle.y, circle.radius,
            index / colors.length * 2 * Math.PI,
            (index + 1) / colors.length  * 2 * Math.PI);

        context.fillStyle = color;
        context.fill();
        context.closePath();
    });
}
