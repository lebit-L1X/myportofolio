import { gsap } from 'gsap'

export function trackCursor(circleRef, posRef) {
  const mouse = { x: 0, y: 0 }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX - 50
    mouse.y = e.clientY - 50
  })

  gsap.ticker.add(() => {
    posRef.value.x += (mouse.x - posRef.value.x) * 0.15
    posRef.value.y += (mouse.y - posRef.value.y) * 0.15

    if (circleRef.value) {
      gsap.set(circleRef.value, {
        x: posRef.value.x,
        y: posRef.value.y
      })
    }
  })
}