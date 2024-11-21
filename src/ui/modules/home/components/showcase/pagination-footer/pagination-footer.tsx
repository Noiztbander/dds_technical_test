"use client";

import ArrowDown from "@/ui/modules/common/icons/arrow-down";
import styles from "./pagination-footer.module.css";
import { useChicagoArtInsTituteContext } from "@/ui/lib/context/chicago-institute-context/provider";
import { fetchGetArtworks } from "@/app/actions";
import { runUpdateArtworks } from "@/ui/lib/context/chicago-institute-context/actions/runs";

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
        <button className={styles.btnPrev} onClick={onClickPreviousPageHandler}>
          <ArrowDown color="#080705" />
          Previous page
        </button>
      )}

      <p className={styles.info}>
        {state.pagination.current_page} / {state.pagination.total_pages}
      </p>

      {state.pagination.current_page !== state.pagination.total_pages && (
        <button className={styles.btnNext} onClick={onClickNextPageHandler}>
          Next page
          <ArrowDown color="#080705" />
        </button>
      )}
    </section>
  );
};

export default PaginationFooter;
