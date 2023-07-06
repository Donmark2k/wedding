
const Gift = () => {
  return (
<div class="modal-body">
<form method="POST" action="#" accept-charset="UTF-8" class="form-horizontal" role="form">
<input type="hidden" name="_token" value=""> <div class="row" style="margin-bottom:40px;">
<div class="col-md-8 col-md-offset-2">
<p>
<div>
Premium Stainless Steel 18L All In One Air Fryer Oven
₦ 139,000.00
</div>
</p>
<input type="text" name="name" placeholder="Name" required>
<input type="text" name="email" placeholder="Email" required>
<input type="hidden" name="orderID" value="345">
<input type="hidden" name="item" value="Premium Stainless Steel 18L All In One Air Fryer Oven">
<input type="hidden" name="amount" value="13900000">
<input type="hidden" name="quantity" value="1">
<input type="hidden" name="currency" value="NGN">
<input type="hidden" name="metadata" value="{&quot;key_name&quot;:&quot;Premium Stainless Steel 18L All In One Air Fryer Oven&quot;}">
<input type="hidden" name="reference" value="Xj1J0W8PhOOETOV1EJd0kEQQN">
<p>
<button class="btn btn-success btn-lg btn-block" type="submit" value="Pay Now!">
<i class="fa fa-plus-circle fa-lg"></i> Gift Us Now!
</button>
</p>
</div>
</div>
</form>
</div> 
);
};

export default Gift;
