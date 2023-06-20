import {useEffect, useState} from "react";
import {throttle} from "underscore";

/**
 * 记录滚动位置
 * @returns {[number,number]}
 */
export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window的滚动
  useEffect(() => {
    // 使用库 进行节流操作 throttle
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [scrollX, scrollY]
}
