<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
  </div>
  <div class="details">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  position: relative;
  margin-block: 10px 10px;
  padding: 0 0 0 1em;
}

.item :before {
  width: 8px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 3px;
  content: "";
  background-color: #59bbe5;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  border: 3px solid var(--color-border);
  border-radius: 50px;
  width: 50px;
  height: 50px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-block: 10px 10px;
    padding: 0 0 0 1em;
    /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2); */
  }

  i {
    /* top: calc(50% 0px);
    left: 0px;
    position: absolute; */
    border: 3px solid var(--color-border);
    /* background: var(--color-background); */
    border-radius: 50px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
