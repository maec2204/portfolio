"use client"

import { useEffect, useMemo, useState } from "react"

interface UseActiveSectionOptions {
  enabled: boolean
  sectionIds: string[]
  headerOffset?: number
}

export function useActiveSection({
  enabled,
  sectionIds,
  headerOffset = 72,
}: UseActiveSectionOptions): string {
  const [activeSectionId, setActiveSectionId] = useState("")
  const sectionKey = useMemo(() => sectionIds.join("|"), [sectionIds])
  const stableSectionIds = useMemo(
    () => (sectionKey ? sectionKey.split("|") : []),
    [sectionKey]
  )

  useEffect(() => {
    if (!enabled) {
      setActiveSectionId("")
      return
    }

    const getPositions = () =>
      stableSectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top }))
        .sort((a, b) => a.top - b.top)

    const compute = () => {
      const positions = getPositions()
      if (positions.length === 0) {
        setActiveSectionId("")
        return
      }

      let next = positions[0].id
      for (const p of positions) {
        if (p.top <= headerOffset) next = p.id
        else break
      }

      setActiveSectionId((prev) => (prev === next ? prev : next))
    }

    let raf: number | null = null
    const onScroll = () => {
      if (raf !== null) return
      raf = window.requestAnimationFrame(() => {
        compute()
        raf = null
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf !== null) window.cancelAnimationFrame(raf)
    }
  }, [enabled, headerOffset, sectionKey, stableSectionIds])

  return activeSectionId
}