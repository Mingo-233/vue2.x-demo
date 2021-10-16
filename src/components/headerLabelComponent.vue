<template functional>
  <div class="headerLabel">
    <span></span>
    <span class="headerLabelSpan2"><strong>{{data.attrs.content}}</strong></span>
    <slot name="toolTip"></slot>
    <!-- <span>{{children}}</span> -->
  </div>
</template>

<style scoped lang="less">
  .headerLabel {
    overflow: hidden;
    margin-top: 14px;
    margin-bottom: 14px;
    height: 18px;

    span:nth-of-type(1) {
      width: 0;
      height: 6px;
      border: 1px solid #18A0EE;
      margin-right: 3px;
      background-color: #18A0EE;
    }

    span:nth-of-type(2) {
      width: 84px;
      height: 20px;
      font-size: 14px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 15px;
      margin-left: 8px;
    }

    span:nth-of-type(3) {
      margin-left: 20px;
      width: 175px;
      height: 17px;
      font-size: 12px;
      font-weight: 400;
      color: #bfbfbf;
      line-height: 17px
    }
  }

</style>
