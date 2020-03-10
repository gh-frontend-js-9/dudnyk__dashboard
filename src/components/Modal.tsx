import React, {Component, MouseEvent} from 'react'; 
import '../assets/modal.scss'

interface IProps {
    title: string;
    parentCallback: (isModal: boolean) => void;
}

class Modal extends Component<IProps> {
    render() {
        return (
            <section className='modal' onClick={ ():void => {this.props.parentCallback(false)} }>
                <div className='modal__container' onClick={(e:MouseEvent):void => e.stopPropagation()}>
                    
                    <h2 className='modal__title'>{this.props.title} 
                        <span 
                            className='modal__exit' 
                            onClick={ ():void => {this.props.parentCallback(false)} }>
                        </span>
                    </h2>
                    
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Modal;