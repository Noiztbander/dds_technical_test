"use client";

import classNames from "classnames";
import ArrowDown from "@/ui/modules/common/icons/arrow-down";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import { fetchGetArtworks } from "@/app/actions";
import { runUpdateArtworks } from "@/ui/lib/context/chicago-institute-context/actions/runs";
import styles from "./pagination-footer.module.css";
import buttonStyles from "@/ui/styles/buttons.module.css";

const PaginationFooter = () => {
  const { state, dispatch } = useChicagoArtInsTituteContext();

  const onClickNextPageHandler = async () => {
    await fetchGetArtworks({
      query: state.filter.query,
      current_page: state.pagination.current_page + 1,
    }).then((response) => {
      const { artworks, pagination } = response;
      dispatch(runUpdateArtworks({ pagination, artworks }));
    });
  };

  const onClickPreviousPageHandler = async () => {
    await fetchGetArtworks({
      query: state.filter.query,
      current_page: state.pagination.current_page - 1,
    }).then((response) => {
      const { artworks, pagination } = response;
      dispatch(runUpdateArtworks({ pagination, artworks }));
    });
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
