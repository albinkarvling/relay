import { isMember } from "@/features/members/memberRepository.js";
import { sql } from "@/lib/db.js";

export async function canAccessChannel(userId: string, channelId: string): Promise<boolean> {
	const rows = await sql`
        SELECT workspace_id
        FROM channels
        WHERE id = ${channelId}
    `;

	const workspaceId = rows[0]?.workspace_id;

	if (!workspaceId) return false;

	const member = await isMember(workspaceId, userId);

	return !!member;
}
