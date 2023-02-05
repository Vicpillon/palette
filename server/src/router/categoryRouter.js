const express = require("express");
const { categoryController } = require("../controller");
const { categoryMiddleware } = require("../middleware");

const categoryRouter = express.Router();

//카테고리 생성
categoryRouter.post(
  "/",
  categoryMiddleware.checkCompleteCategoryFrom("body"),
  categoryController.createCategory
);
//카테고리 조회
categoryRouter.get(
  "/:id",
  categoryMiddleware.checkCategoryIdFrom("params"),
  categoryController.getCategory
);
categoryRouter.get("/", categoryController.getAllCategories);
//카테고리 수정
categoryRouter.put(
  "/:id",
  categoryMiddleware.checkCategoryIdFrom("params"),
  //categoryMiddleware.checkMinCategoryConditionFrom("body"),
  categoryController.putCategory
);
//카테고리 삭제
categoryRouter.delete(
  "/:id",
  categoryMiddleware.checkCategoryIdFrom("params"),
  categoryController.deleteCategory
);

module.exports = categoryRouter;
