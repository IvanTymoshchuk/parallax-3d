document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
    --move-x:${e.clientX};
    --move-y:${e.clientY};
    `,
  });
});
