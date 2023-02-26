import { Messages } from "@common/i18n";
import { Text } from "@components";
import { Divider, Header, Section, insertSections, settingsTools } from "./lib";
import { General, Plugins, QuickCSS, Themes, Updater } from "./pages";

export { insertSections };

export function start(): void {
  settingsTools.addAfter("Billing", [
    Divider(),
    Header("Replugged"),
    Section({
      name: "rp-general",
      label: () => Messages.SETTINGS_GENERAL,
      elem: General,
    }),
    Section({
      name: "rp-quickcss",
      label: () => Messages.REPLUGGED_QUICKCSS,
      elem: QuickCSS,
    }),
    Section({
      name: "rp-plugins",
      label: () => Messages.REPLUGGED_PLUGINS,
      elem: Plugins,
    }),
    Section({
      name: "rp-themes",
      label: () => Messages.REPLUGGED_THEMES,
      elem: Themes,
    }),
    Section({
      name: "rp-updater",
      label: () => Messages.REPLUGGED_UPDATES_UPDATER,
      elem: Updater,
    }),
  ]);

  settingsTools.addSection({
    name: "CUSTOM",
    _id: "rp-version",
    elem: () => (
      <Text
        variant="text-xs/normal"
        color="text-muted"
        style={{
          padding: "0px 10px",
          // Section above has padding of 10px, so we need to offset it
          // Each line has an extra 4px of line height (2px top, 2px bottom) so we need to add 2px
          // So -10px + 2px = -8px
          marginTop: "-8px",
        }}>
        {Messages.REPLUGGED_VERSION.format({ version: window.RepluggedNative.getVersion() })}
      </Text>
    ),
    pos: 0,
    fromEnd: true,
  });
}

export function stop(): void {
  settingsTools.removeAfter("Billing");
  settingsTools.removeSection("rp-version");
}
