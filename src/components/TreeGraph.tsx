"use client";

import { useEffect, useRef } from "react";

interface Node {
  id: string;
  children?: Node[];
}

export interface TreeGraphProps {
  data?: Node[];
}

export const TreeGraph = ({ data = [] }: TreeGraphProps) => {
  const figures = useRef([]);

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext?.("2d");
    if (!ctx) return;

    data.forEach((item, idx) => {
      const x = (idx + 3) * 100;
      const y = 100;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillText(item.id, x, y);

      let childX = 1;
      item.children?.forEach((child, childIdx) => {
        childX += (childIdx + 3) * 100;
        const childY = 300;
        ctx.beginPath();
        ctx.arc(childX, childY, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText(child.id, childX, childY);

        ctx.beginPath();
        ctx.moveTo(x, y + 30);
        ctx.lineTo(childX, childY - 30);
        ctx.stroke();
      });
    });
  }, [data]);

  return (
    <div>
      <canvas
        id="canvas"
        width="1000"
        height="600"
        className="border-2 border-black"
      />
    </div>
  );
};
