export function Modal(props) {
    return(
        <div className="modal" style={{display: props.isHidden ? "none": "block" }} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="modalTitle">{props.modalTitle ?? ""}</h3>
                        <button type="button" className="close-btn" onClick={props.closeModal ?? null}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button disabled={props.isDisabled ?? false} type="button" className="btn btn-light-secondary" 
                        data-dismiss="modal" onClick={props.closeModal}>
                            {/* <span className="bx bx-x d-block d-sm-none"></span> */}
                            <span className="d-none d-sm-block">Annuler</span>
                        </button>
                        <button disabled={props.isDisabled ?? false} type="button" className="btn btn-warning ml-1" 
                        data-dismiss="modal" onClick={props.confirmModal ?? null}>
                            {/* <span className="bx bx-check d-block d-sm-none"></span> */}
                            <span className="d-none d-sm-block">{props.isDisabled ? 'Veuillez patienter...' : 'Valider'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}