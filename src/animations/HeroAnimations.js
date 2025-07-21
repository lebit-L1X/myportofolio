import { gsap } from 'gsap'

export const HeroAnimation = (
  yellowRef,
  greenRef,
  whiteRef,
  coralRef,
  blueRef,
  lilacRef
) => {
  const blobs = [
    { ref: greenRef, radius: 40, color: 'green' },
    { ref: whiteRef, radius: 30, color: 'white' },
    { ref: coralRef, radius: 35, color: 'coral' },
    { ref: blueRef, radius: 32, color: 'blue' },
    { ref: lilacRef, radius: 30, color: 'lilac' }
  ]

  const velocity = blobs.map(() => ({
    x: (Math.random() - 0.5) * 4,
    y: (Math.random() - 0.5) * 4
  }))

  let center = { x: 0, y: 0 }
  let yellowRadius = 0

  const distance = (a, b) =>
    Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)

  const resolveCollision = (b1, v1, b2, v2) => {
    const xVelocityDiff = v1.x - v2.x
    const yVelocityDiff = v1.y - v2.y

    const xDist = b2.x - b1.x
    const yDist = b2.y - b1.y

    // Prevent accidental overlap
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      const angle = -Math.atan2(b2.y - b1.y, b2.x - b1.x)

      const u1 = rotate(v1, angle)
      const u2 = rotate(v2, angle)

      const vFinal1 = { x: u2.x, y: u1.y }
      const vFinal2 = { x: u1.x, y: u2.y }

      const vRot1 = rotate(vFinal1, -angle)
      const vRot2 = rotate(vFinal2, -angle)

      return [vRot1, vRot2]
    }

    return [v1, v2]
  }

  const rotate = (vel, angle) => ({
    x: vel.x * Math.cos(angle) - vel.y * Math.sin(angle),
    y: vel.x * Math.sin(angle) + vel.y * Math.cos(angle)
  })

  const animate = () => {
    if (!yellowRef.value) return

    const yellowBounds = yellowRef.value.getBoundingClientRect()
    yellowRadius = yellowBounds.width / 2
    center = { x: yellowBounds.left + yellowRadius, y: yellowBounds.top + yellowRadius }

    blobs.forEach((b, i) => {
      const el = b.ref.value
      if (!el) return

      if (!b.x || !b.y) {
        b.x = yellowRadius + Math.random() * 50 - 25
        b.y = yellowRadius + Math.random() * 50 - 25
      }

      b.x += velocity[i].x
      b.y += velocity[i].y

      // Edge collision (stay inside yellow circle)
      const dx = b.x - yellowRadius
      const dy = b.y - yellowRadius
      const distFromCenter = Math.sqrt(dx * dx + dy * dy)

      if (distFromCenter + b.radius >= yellowRadius) {
        const norm = { x: dx / distFromCenter, y: dy / distFromCenter }
        const dot = velocity[i].x * norm.x + velocity[i].y * norm.y
        velocity[i].x -= 2 * dot * norm.x
        velocity[i].y -= 2 * dot * norm.y
        b.x = yellowRadius + norm.x * (yellowRadius - b.radius - 1)
        b.y = yellowRadius + norm.y * (yellowRadius - b.radius - 1)
      }

      // Inter-blob collision
      for (let j = i + 1; j < blobs.length; j++) {
        const b2 = blobs[j]
        const v1 = velocity[i]
        const v2 = velocity[j]

        const dist = distance(b, b2)
        if (dist < b.radius + b2.radius) {
          const [newV1, newV2] = resolveCollision(b, v1, b2, v2)
          velocity[i] = newV1
          velocity[j] = newV2
        }
      }

      el.style.transform = `translate(${b.x - b.radius}px, ${b.y - b.radius}px)`
    })
  }

  gsap.ticker.add(animate)
}
