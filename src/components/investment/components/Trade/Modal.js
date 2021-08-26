import React, { useEffect } from 'react';

const Modal = props => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, onAccept } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="close" onClick={onAccept}>
                            예
                        </button>
                        <span> </span>
                        <button className="close" onClick={close}>
                            아니오
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;