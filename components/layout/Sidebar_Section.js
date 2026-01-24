import Sidebar_Group from "@/components/layout/Sidebar_Group"

export default function Sidebar_Section({
    group,
    pathname,
    context,
    onHoverItem,
    onLeaveItem,
    onNavigate,
}) {
    const isModule = context === "module"

    const rootModules = []
    const adaptedGroup = {
        ...group,
        items: group.items.flatMap((item) => {
            const isActiveProject = pathname.startsWith(item.route)

            if (!isModule) return [item]
            if (!isActiveProject) return [item]

            rootModules.push(item.id)

            const levelItems = Object.values(item.levels).map((lvl) => ({
                id: `${item.id}-${lvl.id}`,
                label: lvl.label,
                route: `${item.route}/${lvl.id}`,
                camera: item.camera,
            }))

            return [item, ...levelItems]
        }),
    }

    return (
        <div className="flex flex-col items-end">
            <Sidebar_Group
                group={adaptedGroup}
                pathname={pathname}
                rootModules={rootModules}
                onHoverItem={onHoverItem}
                onLeaveItem={onLeaveItem}
                onNavigate={onNavigate}
            />
        </div>
    )
}
