// components/RouterPagination.jsx
import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const itemData = [
  { page: 1, link: "/" },
  { page: 2, link: "/users" },
  { page: 3, link: "/ProductList" },
  { page: 4, link: "/page4" },
  { page: 5, link: "/about" },
  { page: 6, link: "/page6" },
  { page: 7, link: "/page7" },
  { page: 8, link: "/page8" },
  { page: 9, link: "/page9" },
  { page: 10, link: "/page10" },
  // ... you can add more pages dynamically
];
 function Pagination() {
  const location = useLocation();
  const total = itemData.length;
  const currentIndex = itemData.findIndex(item => item.link === location.pathname);
  const currentPage = currentIndex >= 0 ? currentIndex + 1 : 1;
  const neighbours = 1; // how many pages on each side of current

  const pages = [];

  // Always show first page
  pages.push(itemData[0]);

  // Show left ellipsis if needed
  if (currentPage > 2 + neighbours) {
    pages.push({ isEllipsis: true, key: "left-ellipsis" });
  }

  // Pages around current
  const start = Math.max(2, currentPage - neighbours);
  const end = Math.min(total - 1, currentPage + neighbours);
  for (let i = start; i <= end; i++) {
    pages.push(itemData[i - 1]);
  }

  // Show right ellipsis if needed
  if (currentPage < total - neighbours - 1) {
    pages.push({ isEllipsis: true, key: "right-ellipsis" });
  }

  // Always show last page
  if (total > 1) {
    pages.push(itemData[total - 1]);
  }

  return (
    <BootstrapPagination className="justify-content-center">
      <BootstrapPagination.First
        as={Link}
        to={itemData[0].link}
        disabled={currentPage === 1}
      />
      <BootstrapPagination.Prev
        as={Link}
        to={ itemData[Math.max(0, currentIndex - 1)].link }
        disabled={currentPage === 1}
      />

      {pages.map(item => {
        if (item.isEllipsis) {
          return <BootstrapPagination.Ellipsis key={item.key} disabled />;
        } else {
          return (
            <BootstrapPagination.Item
              key={item.page}
              as={Link}
              to={item.link}
              active={location.pathname === item.link}
            >
              {item.page}
            </BootstrapPagination.Item>
          );
        }
      })}

      <BootstrapPagination.Next
        as={Link}
        to={ itemData[Math.min(total - 1, currentIndex + 1)].link }
        disabled={currentPage === total}
      />
      <BootstrapPagination.Last
        as={Link}
        to={itemData[total - 1].link}
        disabled={currentPage === total}
      />
    </BootstrapPagination>
  );
}
export default Pagination;