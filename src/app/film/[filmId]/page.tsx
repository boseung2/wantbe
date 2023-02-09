import React from "react";

interface PageParams {
  params: {
    filmId: number;
  };
}
export default function page({ params }: PageParams) {
  return <div>영화 개별 상세 정보 페이지 : {params.filmId}</div>;
}
