import React from 'react';

const Gift = () => {
  return (
    <div className="modal" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true" data-backdrop="false">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form method="POST" action="#" acceptCharset="UTF-8" className="form-horizontal" role="form">
            <input type="hidden" name="_token" value="" />
            <div className="row" style={{ marginBottom: '40px' }}>
              <div className="col-md-8 col-md-offset-2">
                <p>
                  <div>
                    Premium Stainless Steel 18L All In One Air Fryer Oven
                    ₦ 139,000.00
                  </div>
                </p>
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="email" placeholder="Email" required />
                <input type="hidden" name="orderID" value="345" />
                <input type="hidden" name="item" value="Premium Stainless Steel 18L All In One Air Fryer Oven" />
                <input type="hidden" name="amount" value="13900000" />
                <input type="hidden" name="quantity" value="1" />
                <input type="hidden" name="currency" value="NGN" />
                <input type="hidden" name="metadata" value="{&quot;key_name&quot;:&quot;Premium Stainless Steel 18L All In One Air Fryer Oven&quot;}" />
                <input type="hidden" name="reference" value="Xj1J0W8PhOOETOV1EJd0kEQQN" />
                <p>
                  <button className="btn btn-success btn-lg btn-block" type="submit" value="Pay Now!">
                    <i className="fa fa-plus-circle fa-lg"></i> Gift Us Now!
                  </button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default Gift;
