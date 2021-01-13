import {
  useRef,
  useEffect,
  useCallback,
  MutableRefObject,
  useState
} from 'react'

const defaultIntersectionObserverInit: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: Array.from({ length: 100 }, (v: undefined, i: number) => i * 0.01)
}
export const useVisible = <T extends Element, V = number>(
  cb?: (vi: number) => V,
  option: Partial<IntersectionObserverInit> = {}
): [MutableRefObject<T | null>, boolean] => {
  const targetRef = useRef<T | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [visible, setVisible] = useState<number>(0)
  // TODO: visible types refactor
  const status: boolean = (typeof cb === 'function' ? cb(visible) : (visible as any)) === 1 ? true : false;
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        setVisible(entry.intersectionRatio)
      })
    },
    []
  )

  useEffect(() => {
    if (observerRef.current) return
    if (!targetRef.current) return
    observerRef.current = new IntersectionObserver(observerCallback, {
      ...defaultIntersectionObserverInit,
      ...option
    })
    observerRef.current.observe(targetRef.current)
  }, [observerCallback, option])
  return [targetRef, status]


}



export default useVisible


// based on https://github.com/kmkzt/react-hooks-visible