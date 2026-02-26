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
  headerOffset = 96,
}: UseActiveSectionOptions): string {
  const [activeSectionId, setActiveSectionId] = useState("")

  const sectionKey = useMemo(() => sectionIds.join("|"), [sectionIds])

  useEffect(() => {
    if (!enabled) {
      setActiveSectionId("")
      return
    }

    const getSectionElements = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null)

    const computeActiveSection = () => {
      const sectionElements = getSectionElements()
      if (sectionElements.length === 0) {
        setActiveSectionId("")
        return
      }

      const positions = sectionElements.map((element) => ({
        id: element.id,
        top: element.getBoundingClientRect().top,
      }))

      let nextActive = ""
      for (const position of positions) {
        if (position.top <= headerOffset + 1) {
          nextActive = position.id
        }
      }

      if (!nextActive) {
        nextActive = positions[0]?.id ?? ""
      }

      setActiveSectionId((prev) => (prev === nextActive ? prev : nextActive))

      if (nextActive) {
        const nextHash = `#${nextActive}`
        if (window.location.hash !== nextHash) {
          window.history.replaceState(null, "", nextHash)
        }
      }
    }

    let rafId: number | null = null

    const scheduleCompute = () => {
      if (rafId !== null) return

      rafId = window.requestAnimationFrame(() => {
        computeActiveSection()
        rafId = null
      })
    }

    scheduleCompute()
    window.addEventListener("scroll", scheduleCompute, { passive: true })
    window.addEventListener("hashchange", scheduleCompute)

    return () => {
      window.removeEventListener("scroll", scheduleCompute)
      window.removeEventListener("hashchange", scheduleCompute)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [enabled, headerOffset, sectionKey, sectionIds])

  return activeSectionId
}
