"use client";

import classNames from "classnames";
import ArrowDown from "@/ui/modules/common/icons/arrow-down";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import styles from "./pagination-footer.module.css";
import buttonStyles from "@/ui/styles/buttons.module.css";
import { useFetchArtworks } from "@/ui/hooks/useFetchArtworks";

const PaginationFooter = () => {
  const { updateArtworks } = useFetchArtworks();
  const { state } = useChicagoArtInsTituteContext();

  const onClickNextPageHandler = async () => {
    updateArtworks(state.pagination.current_page + 1);
  };

  const onClickPreviousPageHandler = async () => {
    updateArtworks(state.pagination.current_page - 1);
  };

  return (
    <section className={styles.paginationContainer}>
      {state.pagination.current_page !== 1 && (
        <button
          className={classNames(
            styles.btnPrev,
            buttonStyles.btn_hover,
            buttonStyles.color_inverse_black
          )}
          onClick={onClickPreviousPageHandler}>
          <ArrowDown className={styles.icon} />
          Previous page
        </button>
      )}

      <p className={styles.info}>
        {state.pagination.current_page} / {state.pagination.total_pages}
      </p>

      {state.pagination.current_page !== state.pagination.total_pages && (
        <button
          className={classNames(
            styles.btnNext,
            buttonStyles.btn_hover,
            buttonStyles.color_inverse_black
          )}
          onClick={onClickNextPageHandler}>
          Next page
          <ArrowDown className={styles.icon} />
        </button>
      )}
    </section>
  );
};

export default PaginationFooter;
