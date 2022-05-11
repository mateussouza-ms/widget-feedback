import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../FeedbackRepository";

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create(data: FeedbackCreateData) {
    const { type, comment, screenshot } = data;
    await prisma.feedback.create({
      data: { type, comment, screenshot },
    });
  }
}
