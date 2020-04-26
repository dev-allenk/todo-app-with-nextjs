import React, { useRef, useState } from "react";
import S from "./styles";
import { ITodoItem } from "@types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface TodoItemProps {
  forwardRef: React.MutableRefObject<Element | null>;
  item: ITodoItem;
  onUpdate(P: React.MouseEvent<HTMLElement>): Promise<void>;
  onDelete(P: React.MouseEvent<HTMLElement>): Promise<void>;
}

function TodoItem({ forwardRef, item, onUpdate, onDelete }: TodoItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useIntersectionObserver({
    target: targetRef,
    onIntersect: ([{ isIntersecting }], observer) => {
      if (isIntersecting) {
        setIsVisible(true);
        observer.unobserve(targetRef.current!);
      }
    },
    root: forwardRef.current!,
  });
  return (
    <S.Li key={item.id} ref={targetRef}>
      {isVisible && (
        <>
          <S.Span
            data-id={item.id}
            onClick={onUpdate}
            completed={item.completed}
          >
            {item.title}
          </S.Span>
          <S.CloseButton data-id={item.id} onClick={onDelete} />
        </>
      )}
    </S.Li>
  );
}

export default TodoItem;
