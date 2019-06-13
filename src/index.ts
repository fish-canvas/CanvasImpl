import {colorsCircle} from "./circle";

/**
 * 获得html中的canvas元素，记得在index.html中指定它
 */
const canvasEle: HTMLCanvasElement =
    document.getElementById("canvas") as HTMLCanvasElement;
canvasEle.width = 2000;
canvasEle.height = 1500;

const context = canvasEle.getContext("2d") as CanvasRenderingContext2D;

/**
 * canvas的绘制，先有状态，后又行为
 *
 * 以(0,0) 为起点，划到(300, 500)
 * stroke() 真正的绘制
 */
context.beginPath();
context.moveTo(0, 0);
context.lineTo(300, 500);
context.lineTo(322, 335);
context.lineTo(0, 0);
context.stroke();
context.fill();
context.closePath();

const colors = ["blue", "white", "black", "yellow", "red"];
const circle = {
    x: 300,
    y: 300,
    radius: 300,
};

colorsCircle(context, colors, circle);

// setInterval(() => {
//     colors.push(colors.pop() as string);
//     colorsCircle(context, colors, circle);
//     console.log("sdfs")
// }, 300);
