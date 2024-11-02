import {
  createUltimatePagination,
  ITEM_TYPES,
} from "react-ultimate-pagination";

function WrapperComponent({ children }: { children: React.ReactNode }) {
  return <div className="pagination-wrapper">{children}</div>;
}

function Page({
  value,
  isActive,
  onClick,
}: {
  value: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <span
      className={`link pagination-link ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {value}
    </span>
  );
}

function Ellipsis() {
  return <span className="link pagination-link elipse">...</span>;
}

function FirstPageLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="link pagination-button"
      onClick={onClick}
      disabled={false}
    >
      First
    </button>
  );
}

function PreviousPageLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="link pagination-button"
      onClick={onClick}
      disabled={false}
    >
      Previous
    </button>
  );
}

function NextPageLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="link pagination-button"
      onClick={onClick}
      disabled={false}
    >
      Next
    </button>
  );
}

function LastPageLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="link pagination-button"
      onClick={onClick}
      disabled={false}
    >
      Last
    </button>
  );
}

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink,
};

const Paginator = createUltimatePagination({
  itemTypeToComponent,
  WrapperComponent,
});

export default Paginator;
