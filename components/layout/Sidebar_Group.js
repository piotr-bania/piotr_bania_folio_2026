import Sidebar_Item from "@/components/layout/Sidebar_Item"

export default function Sidebar_Group({
    group,
    pathname,
    rootModules,
    onHoverItem,
    onLeaveItem,
    onNavigate,
}) {
    return (
        <>
            {group.label && (
                <p className="paragraph_tiny w-32 text-right opacity-60">
                    {group.label}
                </p>
            )}

            <ul className="flex flex-col items-end mt-1">
                {group.items.map((item) => (
                    <Sidebar_Item
                        key={item.id}
                        item={item}
                        active={pathname === item.route}
                        isRootModule={rootModules?.includes(item.id)}
                        onHoverItem={onHoverItem}
                        onLeaveItem={onLeaveItem}
                        onNavigate={onNavigate}
                    />
                ))}
            </ul>
        </>
    )
}
