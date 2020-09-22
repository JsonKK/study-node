//聊天
if (StringUtils.isEmpty(obj.getChat_status()) || "0".equals(obj.getChat_status())) {
  mRelQuChat.setVisibility(View.GONE);
}
mInfo = obj;
mTvGiftInComePrice.setText(obj.getLeftAmount());
mTvGiftInComeTotalPrice.setText(obj.getReceiveAmount() + "趣豆");
mTvCallInComeTotalPrice.setText(obj.getCall_receive_amount() + "趣豆");
mTvCallInComePrice.setText(obj.getCall_left_amount());
mTvChatInComeTotalPrice.setText(obj.getChat_receive_amount() + "趣豆");
mTvChatInComePrice.setText(obj.getChat_left_amount());
mTvChatCalculate.setVisibility (obj.isGhChat () ? View.VISIBLE : View.GONE);
//趣聊
if ("1".equals(obj.getApply_status())) {
  mRelQuCall.setVisibility(View.VISIBLE);
} else {
  mRelQuCall.setVisibility(View.GONE);
}

if (obj.getRemarks() != null && obj.getRemarks().size() > 0) {
  mLinRemarks.removeAllViews();
  for (String remarks : obj.getRemarks()) {
      TextView tv = (TextView) LayoutInflater.from(MyGainActivity.this).inflate(R.layout.item_my_gain_remark, mLinRemarks, false);
      tv.setText(remarks);
      mLinRemarks.addView(tv);
  }
}


//家族收入
if (!TextUtils.isEmpty(obj.getFamilyLeftAmount()) && !TextUtils.isEmpty(obj.getFamilyReceiveAmount())) {
  mRelFamilyIncome.setVisibility(View.VISIBLE);
  mTvFamilyInComePrice.setText(obj.getFamilyLeftAmount());
  mTvFamilyInComeTotalPrice.setText(obj.getFamilyReceiveAmount() + "元");
} else {
  mRelFamilyIncome.setVisibility(View.GONE);
}