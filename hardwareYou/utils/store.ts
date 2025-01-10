import { reactive } from "vue";

interface StateStore {
  open: boolean;
  onChange: () => void;
  show: boolean;
  onChangeShow: () => void;
}

const stateStore: StateStore = reactive({
  open: false,
  onChange() {
    stateStore.open = !stateStore.open;
  },
  show: false,
  onChangeShow() {
    stateStore.show = !stateStore.show;
  },
});

export default stateStore;
