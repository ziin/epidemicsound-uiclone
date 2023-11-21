import { Heading } from "~/components/ui/heading";

export function SoundTracking() {
  return (
    <Heading as="h2" className="px-4 text-center">
      Currently soundtracking
      <div className="grid justify-center overflow-hidden text-purple">
        <div className="[grid-area:1/1] opacity-0 animate-fadeup">
          lifestyle vloggers
        </div>
        <div className="[grid-area:1/1] opacity-0 animate-fadeup [animation-delay:4s]">
          Netflix shows
        </div>
        <div className="[grid-area:1/1] opacity-0 animate-fadeup [animation-delay:8s]">
          crime podcasts
        </div>
        <div className="[grid-area:1/1] opacity-0 animate-fadeup [animation-delay:12s]">
          Twitch streamers
        </div>
        <div className="[grid-area:1/1] opacity-0 animate-fadeup [animation-delay:16s]">
          ASMR videos
        </div>
        <div className="[grid-area:1/1] opacity-0 animate-fadeup [animation-delay:20s]">
          YouTube pranksters
        </div>
        <div className="[grid-area:1/1] opacity-0 animate-fadeup [animation-delay:24s]">
          pop-up stores
        </div>
        <div className="[grid-area:1/1] opacity-0 animate-fadeup [animation-delay:28s]">
          TikTok challenges
        </div>
      </div>
    </Heading>
  );
}
