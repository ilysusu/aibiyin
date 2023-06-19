import {useLocation} from "react-router-dom";
import {useEffect} from "react";

// 切换页面滚动到顶端
export default function useScrollTop () {
  const location = useLocation()
  // 监听路径是否发生改变
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}
